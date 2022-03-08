import { Disposition } from "../models/disposition.js"

function newDisposition(req, res){
  Disposition.find({})
  .then(dispositions => {
    res.render('dispositions/new', {
      title: "Add Disposition Methods",
      dispositions,
    })
  })
}

function create(req, res){
  Disposition.create(req.body)
  .then(disposition => {
    res.redirect('/dispositions/new')
  })
}


export{
  newDisposition as new,
  create,
}