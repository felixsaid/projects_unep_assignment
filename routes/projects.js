const mysql = require("../database");
const route = require("express").Router();


//get all projects

route.get("/all", async(req, res) => {
    try {
        mysql.query("SELECT * FROM project", async function(error, results){
            if(error){
                return res.status(500).send({
                    error: true,
                    message: error.sqlMessage,
                  });
            }else{
                return res.status(200).send({
                    error : false,
                    data : results,
                    message : "all projects successfully retreived."
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});

//get projects by country

route.get("/country/:countryName", async(req, res) => {

    const countryName = req.params.countryName;
    
    try {
        mysql.query("SELECT * FROM project WHERE countryName = ?", [countryName], async function(error, results){
            if(error){
                return res.status(500).send({
                    error: true,
                    message: error.sqlMessage,
                  });
            }else{
                return res.status(200).send({
                    error : false,
                    data : results,
                    message : `all projects in country ${countryName} successfully returned.`
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});

//get projects by completion status

route.get("/status/:completeStatus", async(req, res) => {

    const completeStatus = req.params.completeStatus;


    try {
        mysql.query("SELECT * FROM project WHERE projectStatus = ?", [completeStatus], async function(error, results){
            if(error){
                return res.status(500).send({
                    error: true,
                    message: error.sqlMessage,
                  });
            }else{
                return res.status(200).send({
                    error : false,
                    data : results,
                    message : `all projects with status ${completeStatus} successfully returned.`
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});

//get a project by project id

route.get("/:id", async(req, res) => {

    const id = req.params.id;


    try {
        mysql.query("SELECT * FROM project WHERE projectId = ?", [id], async function(error, results){
            if(error){
                return res.status(500).send({
                    error: true,
                    message: error.sqlMessage,
                  });
            }else{
                return res.status(200).send({
                    error : false,
                    data : results,
                    message : `Project with id ${id} was successfully returned.`
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});


//create a project

route.post("/create", async(req, res) => {

    let project_ref = req.body.project_ref;
    let country_name = req.body.country_name;
    let implementing_office = req.body.implementing_office;
    let project_title = req.body.project_title;
    let grant_amount = req.body.grant_amount;
    let date_from_gcf = req.body.date_from_gcf;
    let start_date = req.body.start_date;
    let project_duration = req.body.project_duration;
    let end_date = req.body.end_date;
    let project_readiness = req.body.project_readiness;
    let readiness_type = req.body.readiness_type;
    let first_disbursement = req.body.first_disbursement;
    let project_status = req.body.project_status;


    try {
        if(!project_ref || !country_name || !implementing_office || !project_title || !grant_amount || !date_from_gcf || !start_date || !project_duration || !end_date || !project_readiness || !readiness_type || !first_disbursement || !project_status){
            res.status().send({
                error : true,
                message : "A field is missing. Kindly ensure that you have provided all the fields."
            });
        }else{
            //check if the project exists in the system using the project_ref
            mysql.query("SELECT * FROM project WHERE projectRef = ?", [project_ref], async function(error, results){
                if(error){
                    return res.status(500).send({
                        error: true,
                        message: error.sqlMessage,
                      });
                }else{
                    let message = "";
                    if(results.length === 0 || results === undefined){
                        mysql.query("INSERT INTO project (projectRef, countryName, implementingOffice, projectTitle, grantAmount, dateFromGcf, startDate, projectDuration, endDate, projectReadiness, readinessType, firstDisbursement, projectStatus) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
                            [project_ref, country_name, implementing_office, project_title, grant_amount, date_from_gcf, start_date, project_duration, end_date, project_readiness, readiness_type, first_disbursement, project_status], async function(error, results, fields){
                                if(error){
                                    return res.status(500).send({
                                        error: true,
                                        message: error.sqlMessage,
                                      });
                                }else{
                                    return res.send({
                                        error: false,
                                        data: results,
                                        message: "Project succeffully saved.",
                                      });
                                }
                            });
                    }else{
                        message = `Project with ref number  ${project_ref} already exists in the system.`;

                        return res.status(409).send({
                            error : true,
                            message : message
                        });
                    }
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});

//update project details

route.put("/update/:id", async(req, res) => {

    const id = req.params.id;


    let project_ref = req.body.project_ref;
    let country_name = req.body.country_name;
    let implementing_office = req.body.implementing_office;
    let project_title = req.body.project_title;
    let grant_amount = req.body.grant_amount;
    let date_from_gcf = req.body.date_from_gcf;
    let start_date = req.body.start_date;
    let project_duration = req.body.project_duration;
    let end_date = req.body.end_date;
    let project_readiness = req.body.project_readiness;
    let readiness_type = req.body.readiness_type;
    let first_disbursement = req.body.first_disbursement;
    let project_status = req.body.project_status;


    try {
        if(!project_ref || !country_name || !implementing_office || !project_title || !grant_amount || !date_from_gcf || !start_date || !project_duration || !end_date || !project_readiness || !readiness_type || !first_disbursement || !project_status){
            res.status().send({
                error : true,
                message : "A field is missing. Kindly ensure that you have provided all the fields."
            });
        }else{
            //check if the project exists in the system using the project_ref
            mysql.query("SELECT * FROM project WHERE projectId = ?", [id], async function(error, results){
                if(error){
                    return res.status(500).send({
                        error: true,
                        message: error.sqlMessage,
                      });
                }else{
                    let message = "";
                    if(results.length === 0 || results === undefined){
                        message = `Project with id  ${id} was not found.`;

                        return res.status(409).send({
                            error : true,
                            message : message
                        });
                    }else{
                        mysql.query("UPDATE project SET projectRef = ?, countryName = ?, implementingOffice = ?, projectTitle = ?, grantAmount = ?, dateFromGcf = ?, startDate = ?, projectDuration = ?, endDate = ?, projectReadiness = ?, readinessType = ?, firstDisbursement = ?, projectStatus = ?", 
                            [project_ref, country_name, implementing_office, project_title, grant_amount, date_from_gcf, start_date, project_duration, end_date, project_readiness, readiness_type, first_disbursement, project_status], async function(error, results, fields){
                                if(error){
                                    return res.status(500).send({
                                        error: true,
                                        message: error.sqlMessage,
                                      });
                                }else{
                                    return res.send({
                                        error: false,
                                        data: results,
                                        message: `Project with id ${id} succeffully updated.`,
                                      });
                                }
                            });
                    }
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});


//delete a project

route.delete("/:id", async(req, res) => {

    const id = req.params.id;

    try {
        mysql.query("DELETE  FROM project WHERE projectId = ?", [id], async function(error, results){
            if(error){
                return res.status(500).send({
                    error: true,
                    message: error.sqlMessage,
                  });
            }else{
                return res.status(200).send({
                    error : false,
                    data : results,
                    message : `Project with id ${id} was successfully deleted.`
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            error : true,
            message : err.message
        })
    }
});

module.exports = route;