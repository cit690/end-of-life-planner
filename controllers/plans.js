import { Plan } from "../models/plan.js"

function index(req, res){
  Plan.find({})
  .then(plans => {
    res.render('plans/index',{
      plans,
      title: 'Your plans'
    })
  })
  .catch(err => {
    res.redirect('/plans')
  })
}

function newProfile(req,res){
  res.render('plans/new', {
    title: 'Add your Death Plan'
  })
}

export{
  index,
  newProfile as new,

}

