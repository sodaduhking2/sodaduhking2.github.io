// api/getPastes.js
const fs = require('fs').promises;

module.exports = async (req, res) => {
  try {
    const pasteFiles = await fs.readdir('pastes');
    const pastes = await Promise.all(
      pasteFiles.map(async (file) => {
        const content = await fs.readFile(`pastes/${file}`, 'utf8');
        return {
          id: file.replace(/\.txt$/, ''),
          content,
        };
      })
    );

    res.status(200).json(pastes);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error retrieving pastes');
  }
};
