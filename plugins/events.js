const fs = require('fs')
const glob = require('glob')
const path = require('path')

const frontmatter = require('frontmatter')

const srcDir = path.resolve('./','events');
const files = glob.sync('*/README.md', { cwd: srcDir });
const events = files.map(file => {
  const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8')
  const { data } = frontmatter(content)
  return {  
    id: parseInt(file),
    ...data
  }
});
// events.sort((a, b) => b.id - a.id)
export default events


