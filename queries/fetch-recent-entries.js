module.exports = async (pg) => {
  const entryResults = await pg.query({
    name: 'fetch-recent-entries',
    text: 'SELECT message, roll, result, created_at, log_id FROM entries WHERE CHAR_LENGTH(message) > 0  ORDER BY created_at DESC LIMIT 10;',
    values: []
  })
  return entryResults.rows
}
