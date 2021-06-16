
const Categories=require('../jsonFile/Categories.json')


getCategories = async (req, res) => {
    res.send(Categories);
}


module.exports = {
    getCategories
}