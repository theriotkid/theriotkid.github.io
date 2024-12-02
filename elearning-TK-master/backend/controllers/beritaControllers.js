const beritaModels = require('../models/beritaModels')

module.exports = {
    getDataBerita: async (req, res) => {
        const data = await beritaModels.find()
        res.json(data)
    },

    postDataBerita: async (req, res) => {
        const data = new beritaModels({
            judul: req.body.judul,
            isi: req.body.isi,
            foto: req.body.foto,
            category: req.body.category
        })
        try {
            await data.save()
            res.json(data)
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                err: error
            })
        }
    },
    updateBerita: async (req, res) => {
        const filter = {_id: req.params._id}
        const query = {
            $set:{
                judul: req.body.judul,
                isi: req.body.isi,
                foto: req.body.foto,
                category: req.body.category
            }
        }

        try {
            const updatedData = await beritaModels.updateOne(filter, query)
            if(updatedData.matchedCount === 1){
                res.status(200).json({
                    message: 'data has been updated',
                    updatedData: updatedData
                })
            } else{
                res.status(404).json({
                    message: `data on id: ${req.params._id} not found`
                })
            }
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                err: error
            })
            console.log(error)
        }
    },
    deleteBerita: async (req, res) => {
        try {
            const deletedData = await beritaModels.deleteOne({_id: req.params._id})
            res.status(200).json({
                message: 'data has been deleted',
                systemMessage: deletedData
            })
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                systemMessage: error
            })
        }
    }
}