const crypto = require('crypto');

// Génère un jeton hexadécimal cryptographiquement sûr
function genererToken(bytes = 16) {
  const safeBytes = Number.isInteger(bytes) && bytes > 0 ? bytes : 16;
  return crypto.randomBytes(safeBytes).toString('hex');
}

function classer(note) {
  if (typeof note !== 'number' || Number.isNaN(note)) {
    return 'refusé';
  }
  if (note === 20) {
    return 'parfait';
  }
  if (note >= 10) {
    return 'admis';
  }
  return 'refusé';
}

module.exports = { genererToken, classer };