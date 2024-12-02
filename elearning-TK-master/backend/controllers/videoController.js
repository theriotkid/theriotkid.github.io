const videoModels = require('../models/videoModels')

module.exports = {
    getDataVideo: async (req, res) => {
        try {
            const data = await videoModels.find()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },
    getVideoByCategory: async (req, res) => {
        try {
            const data = await videoModels.find({ category: req.query.category })
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },
    postDataVideo: async (req, res) => {
        const dataSaved = new videoModels({
            link: req.body.link,
            description: req.body.description,
            category: req.body.category
        })
        try {
            const data = await dataSaved.save()
            res.status(200).json({
                message: 'success added data',
                data: data
            })
        } catch (error) {
            console.log(error)
        }
    },
    updateVideo: async (req, res) => {
        const filter = {_id: req.params._id}
        const query = {
            $set:{
                link: req.body.link,
                description: req.body.description,
                category: req.body.category
            }
        }

        try {
            const dataUpdated = await videoModels.updateOne(filter, query)
            res.json({
                message: 'success updated',
                data: dataUpdated
            })
        } catch (error) {
            console.log(error)
        }
    },
    deleteVideo: async (req, res) => {
        try {
            const deletedData = await videoModels.deleteOne({_id: req.params._id})
            if(deletedData && deletedData.deletedCount === 1){
                res.status(200).json({
                    message: 'deleteSuccess',
                    systemMessage: deletedData
                })
            } else{
                res.status(404).json({
                    message: 'data not found',
                })
            }
        } catch (error) {
            res.status(500).json({
                message: 'internal server error!',
                err: error
            })
        }
    },
}