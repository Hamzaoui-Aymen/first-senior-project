const {product} = require('../database/index');

function getAllProducts(req, res) {
    product.findAll()
      .then(products => res.json(products))
      .catch(error => {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  }
  function getProduct(req, res) {
    const { id } = req.params;
  
    product.findByPk(id)
      .then(product => {
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
      })
      .catch(error => {
        console.error('Error retrieving product:', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  }

  function createProduct(req, res) { ;
  const { name, price, description,category,stock,picture } = req.body;
  product.create({ name, price, description,category,stock,picture })
    .then(newProduct => res.status(201).json(newProduct))
    .catch(error => {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description, category, stock, picture } = req.body;

  product.update({ name, price, description, category, stock, picture }, { where: { id } })
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product updated successfully' });
    })
    .catch(error => {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}
function deleteProduct(req, res) {
  const { id } = req.params;

  product.destroy({ where: { id } })
    .then(deleted => {
      if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    })
    .catch(error => {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

module.exports = {getAllProducts,createProduct,updateProduct,deleteProduct,getProduct};
