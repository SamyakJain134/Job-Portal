using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ASPSIGNUPAPI.Models;
//using System.Web.Http.Cors;


namespace ASPSIGNUPAPI.Controllers
{
    public class SignupController : ApiController
    {
        Models.userdbEntities db = new Models.userdbEntities();
        //Adding post request
        public string Post(signup uservalue) //it will take table ka naam here 
        {

            db.signups.Add(uservalue);  //yahan table ke naam ke aage extra s aayega
            db.SaveChanges();
            return "User Added";
        }
        //get function to get all record
        public IEnumerable<signup> Get()
        {
            return db.signups.ToList(); //yahan table ke naam ke aage extra s aayega
        }
        //reading/getting a single value 
        public signup Get(string email) 
        {
            signup uservalue = db.signups.Find(email);//yahan table ke naam ke aage extra s aayega
            return uservalue;
        }
        //updating a record in table
        public string Put(string email, signup u)
        {
            var u1 = db.signups.Find(email);

            u1.password = u.password;

            db.Entry(u1).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return "record updated";

        }
        public string Delete(string email)
        {
            signup uservalue = db.signups.Find(email);
            db.signups.Remove(uservalue);
            return "User Deleted";
        }
    }
}
