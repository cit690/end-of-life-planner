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

function newPlan(req,res){
  res.render('plans/new', {
    title: 'Add your Death Plan'
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
  req.body.dnr = !!req.body.dnr
  Plan.create(req.body)
  .then(plan => {
    console.log(plan)
    res.redirect(`/plans/${plan._id}`)
  })
  .catch(err => {
    res.redirect('/plans/new')
    console.log(err)
  })
}

function show(req, res) {
  Plan.findById(req.params.id)
  .then(plan => {
    res.render('plans/show', {
      plan,
      title: "Your Death Plan"
    })
  })
  .catch(err => {
    res.redirect('/plans')
  })
}

function deletePlan(req, res){
  Plan.findByIdAndDelete(req.params.id)
  .then(plan => {
    res.redirect('/plans')
  })
}

function edit(req, res){
  Plan.findById(req.params.id)
  .then(plan => {
    res.render('plans/edit', {
      plan,
      title: "Edit Your Plan"
    })
  })
  .catch(err => {
    res.redirect('/plans')
  })
}

function update(req, res){
  Plan.findById(req.params.id)
  .then(plan => {
    if (plan.owner.equals(req.user.profile._id)){
      req.body.dnr = !!req.body.dnr
      plan.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/plans/${plan._id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
    console.log(plan)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/plans')
  })
}

export{
  index,
  newPlan as new,
  create,
  show,
  deletePlan as delete,
  edit,
  update,

}

