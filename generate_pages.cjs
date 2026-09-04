const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = ['Home', 'Shop', 'ProductDetails', 'Cart', 'Checkout', 'Login', 'Dashboard'];

pages.forEach(page => {
  const content = `import React from 'react';\n\nconst ${page} = () => {\n  return (\n    <div className="pt-24 px-4 min-h-screen">\n      <h1 className="text-3xl font-serif text-primary">${page}</h1>\n    </div>\n  );\n};\n\nexport default ${page};\n`;
  fs.writeFileSync(path.join(pagesDir, `${page}.jsx`), content);
});

console.log('Placeholders created.');
