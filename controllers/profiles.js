import { Profile } from "../models/profile.js"
import { Plan } from "../models/plan.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
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
  Profile.findById(req.params.id)
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
// .populate('deathPlan')
// .then(profile => {
//   Plan.find({_id: {$nin: profile.deathPlan}}, )
// })

// function show(req, res) {
//   Plan.findById(req.params.id).populate('finalDispo').then(plan => {
//     Disposition.find({_id: {$nin: plan.finalDispo}}, function(err, dispositions){
//       res.render('plans/show', {
//         plan,
//         dispositions,
//         title: "Your Death Plan"
//       })
//     })
//   })
// }

export {
  index,
  show,
}