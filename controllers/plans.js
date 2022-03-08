import { Plan } from "../models/plan.js"
import { Disposition } from "../models/disposition.js"

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

// function show(req, res) {
//   Plan.findById(req.params.id)
//   .then(plan => {
//     res.render('plans/show', {
//       plan,
//       title: "Your Death Plan"
//     })
//   })
//   .catch(err => {
//     res.redirect('/plans')
//   })
// }
function show(req, res) {
  console.log(req.params.id)
 
  Plan.findById(req.params.id).populate('finalDispo').then(plan => {
    Disposition.find({_id: {$nin: plan.finalDispo}}, function(err, dispositions){
    console.log(dispositions)
      res.render('plans/show', {
        plan,
        dispositions,
        title: "Your Death Plan"
      })
    })
  })

}
//   console.log('hello world')
//   console.log(req.params.id)
//   console.log(plan)


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

function createWill(req, res){
  console.log('bloop')
  Plan.findById(req.params.id)
  .then(plan => {
    plan.wills.push(req.body)
    plan.save()
    .then(() => {
      res.redirect(`/plans/${plan._id}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
}

function addDisposition(req, res){
  Plan.findById(req.params.id)
  .then(plan => {
    plan.dispositions.push(req.body.dispositionId)
    plan.save()
    .then(()=>{
      res.redirect(`/plans/${plan._id}`)
    })
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
  createWill,
  addDisposition,

}

