const HttpError = require("../models/http-error");
const Exhibitor = require("../models/exhibitor");

//Get
async function getExhibitors(req, res, next) {
  let exhibitors = [];
  try {
    exhibitors = await Exhibitor.find({});
    res.json({
      exhibitors: exhibitors.map((exhibitor) => {
        return exhibitor.toObject({ getters: true });
      }),
    });
  } catch (err) {
    console.log(err);
    new HttpError("Error while trying to fetch exhibitors", 500);
  }
}
async function getExhibitor(req, res, next) {
  const { id } = req.params;
  let exhibitor;
  try {
    exhibitor = await Exhibitor.findById(id);
    res.status(201).json({
      exhibitor: exhibitor,
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while retrieving exhibitor", 500));
  }
}

//Post
async function addExhibitor(req, res, next) {
  const { firstName, lastName, phoneNumber, picturePath } = req.body;
  try {
    const exhibitorToAdd = new Exhibitor({
      firstName,
      lastName,
      phoneNumber,
      picturePath,
    });
    await exhibitorToAdd.save();
    res
      .status(201)
      .json({ exhibitor: exhibitorToAdd.toObject({ getters: true }) });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while creating exhibitor", 500));
  }
}

//Delete
async function deleteExhibitor(req, res, next) {
  const id = req.params.internshipId;
  try {
    await Exhibitor.deleteOne({ _id: id });
    res.status(200).json({
      message: "Exhibitor was successfully removed",
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Error while trying to delete exhibitor", 500));
  }
}

module.exports = {
  getExhibitors: getExhibitors,
  getExhibitor: getExhibitor,
  addExhibitor: addExhibitor,
  deleteExhibitor: deleteExhibitor,
};
