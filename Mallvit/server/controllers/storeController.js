// src/controllers/storeController.js
const driver = require('../config/neo4j');

const getAllStores = async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run('MATCH (s:Store) RETURN s');
    const stores = result.records.map(record => record.get('s').properties);
    res.json(stores);
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
};

const createStore = async (req, res) => {
  const session = driver.session();
  const { id, name, floor } = req.body;
  try {
    await session.run(
      'CREATE (s:Store {id: $id, name: $name, floor: $floor}) RETURN s',
      { id, name, floor }
    );
    res.status(201).send('Store created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
};

const getStoreById = async (req, res) => {
  const session = driver.session();
  const { id } = req.params;
  try {
    const result = await session.run('MATCH (s:Store {id: $id}) RETURN s', { id: parseInt(id) });
    const store = result.records[0]?.get('s').properties;
    if (store) {
      res.json(store);
    } else {
      res.status(404).send('Store not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
};

const updateStore = async (req, res) => {
  const session = driver.session();
  const { id } = req.params;
  const { name, floor } = req.body;
  try {
    await session.run(
      'MATCH (s:Store {id: $id}) SET s.name = $name, s.floor = $floor RETURN s',
      { id: parseInt(id), name, floor }
    );
    res.send('Store updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
};

const deleteStore = async (req, res) => {
  const session = driver.session();
  const { id } = req.params;
  try {
    await session.run('MATCH (s:Store {id: $id}) DETACH DELETE s', { id: parseInt(id) });
    res.send('Store deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
};


const getShortestPath = async (req, res) => {
    const session = driver.session();
    const { fromId, toId } = req.params;
    try {
      const result = await session.run(
        'MATCH (start:Store {id: $fromId}), (end:Store {id: $toId}) ' +
        'CALL gds.alpha.shortestPath.stream({ ' +
        '  nodeProjection: "Store", ' +
        '  relationshipProjection: { ' +
        '    ADJACENT_TO: { ' +
        '      type: "ADJACENT_TO", ' +
        '      properties: "distance" ' +
        '    } ' +
        '  }, ' +
        '  startNode: start, ' +
        '  endNode: end, ' +
        '  relationshipWeightProperty: "distance" ' +
        '}) ' +
        'YIELD index, nodeId, cost ' +
        'RETURN gds.util.asNode(nodeId).name AS name, cost ' +
        'ORDER BY index',
        { fromId: parseInt(fromId), toId: parseInt(toId) }
      );
  
      const path = result.records.map(record => ({
        name: record.get('name'),
        cost: record.get('cost')
      }));
  
      res.json(path);
    } catch (error) {
      res.status(500).send(error.message);
    } finally {
      await session.close();
    }
  };


module.exports = {
  getAllStores,
  createStore,
  getStoreById,
  updateStore,
  deleteStore,
  getShortestPath
};
