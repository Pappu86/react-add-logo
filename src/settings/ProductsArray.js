const ProductHelpers = {
    GetProducts: function () {
        return [
            {
                id: 1,
                code: 'S440',
                title: "Rain Jacket",
                path: 'rain-jacket',
                src: "../assets/images/s440_black.jpeg",
                minPrice: 9.17,
                maxPrice: 11.52,
                color: 6,
                colors: ['black', 'grey', 'navy', 'green', 'orange', 'yellow'],
                selectedColor: 'black',
                isPrint: true,
                isEmbroidery: true
            },
            {
                id: 2,
                code: 'B195',
                title: "Turin Premium T-Shirt",
                path: 'turin-premium-t-shirt',
                src: "../assets/images/b195_blue.jpeg",
                minPrice: 9.17,
                maxPrice: 11.52,
                color: 5,
                colors: ['black', 'red', 'blue', 'navy', 'yellow'],
                selectedColor: 'blue',
                isPrint: true,
                isEmbroidery: false
            },
            {
                id: 3,
                code: 'UC507',
                title: "Hooded Sweatshirt",
                path: 'hooded-sweatshirt',
                src: "../assets/images/uc507_navy.jpeg",
                minPrice: 9.17,
                maxPrice: 11.52,
                color: 3,
                colors: ['black', 'grey', 'navy', 'blue', 'purple', 'olive'],
                selectedColor: 'navy',
                isPrint: false,
                isEmbroidery: true
            }
        ];
    },
    GetProductById: function (id) {
        if (!id) return null;

        const productId = id * 1 || '';
        const products = this.GetProducts() || [];
        const productInfo = products.find(product => {
            return product.id === productId
        });

        return productInfo;

    }
};

export default ProductHelpers;