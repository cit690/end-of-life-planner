import { Profile } from "../models/profile.js"
import { Plan } from "../models/plan.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    console.log(profiles, 'profiles from index')
    res.render('profiles/index', {
      profiles,
      title: "All User Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id).populate('deathPlans')
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

// function deletePlan(req, res){
//   Profile.findById(req.params.id)
//   .then (profile => {
//     profile.deathPlan.remove({_id: req.params.planId})
//     profile.save()
//     .then(() => {
//       res.redirect(`/profiles/${profile._id}`)
//     })
//   })
// }

// function deleteWill(req, res){
//   Plan.findById(req.params.id)
//   .then (plan => {
//     plan.wills.remove({_id: req.params.willId})
//     plan.save()
//     .then(() => {
//       res.redirect(`/plans/${plan._id}`)
//     })
//   })
// }

export {
  index,
  show,
  // deletePlan as delete,
}