// api/createPaste.js
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  const pasteContent = req.body.content;
  const pasteId = uuidv4();

  try {
    await fs.writeFile(`pastes/${pasteId}.txt`, pasteContent);
    res.status(200).send(pasteId);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error creating paste');
  }
};
