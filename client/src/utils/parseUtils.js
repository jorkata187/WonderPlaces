export const parsedCategoryName = (categoryName) => {
        const categories = {
            Beaches: 'beach',
            Mountains: 'mountain',
            Cities: 'city',
            Nature: 'nature'
        };

        return categories[categoryName]
    };