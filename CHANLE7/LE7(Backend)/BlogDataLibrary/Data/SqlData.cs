using BlogDataLibrary.Database;
using BlogDataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDataLibrary.Data
{
    public class SqlData : ISqlData
    {
        private ISqlDataAccess _db;
        private const string connectionStringName = "SqlDb";

        public SqlData(ISqlDataAccess db)
        {
            _db = db;
        }

        public AdminModel Authenticate(string username, string password)
        {
            AdminModel result = _db.LoadData<AdminModel, dynamic>("dbo.spAdmins_Authenticate",
                                                                new { username, password },
                                                                connectionStringName,
                                                                true).FirstOrDefault();

            return result;
        }

        public void Register(string userName, string firstName, string lastName, string nickName, string email, string password)
        {
            _db.SaveData<dynamic>(
                "dbo.spAdmins_Register",
                new { userName, firstName, lastName, nickName, email, password },
                connectionStringName,
                true);
        }
        public void AddEmployee(BarangayEmployee barangayE)
        {
            _db.SaveData("spAdd_Barangay_Employee", new { barangayE.FirstName, barangayE.LastName, barangayE.Gender, barangayE.Email, barangayE.Address, barangayE.DateJoined }, connectionStringName, true);
        }

        public void AddPost(PostEmployee post)
        {
            _db.SaveData("dbo.spPosts_Insert", new { post.AdminId, post.Position, post.LastName, post.FirstName, post.CurrentPay, post.DateJoined }, connectionStringName, true);
        }
        public void UpdatePost(PostEmployee post)
        {
            _db.SaveData("spPosts_Update", new { post.AdminId, post.Position, post.LastName, post.FirstName, post.CurrentPay, post.DateJoined }, connectionStringName, true);
        }
        public void DeletePost(int postId)
        {
            _db.DeleteData("dbo.spPosts_Delete", new { postsEmployeeId = postId }, connectionStringName, true);
        }


        public List<ListPostModel> ListPosts()
        {
            return _db.LoadData<ListPostModel, dynamic>("spPosts_List", new { }, connectionStringName, true).ToList();
        }

        public ListPostModel ShowPostsDetails(int id)
        {
            return _db.LoadData<ListPostModel, dynamic>("dbo.spPosts_Detail", new { id }, connectionStringName, true).FirstOrDefault();
        }
        public void UpdateBarangayEmployee(BarangayEmployee barangayE)
        {
            _db.SaveData("spUpdate_Barangay_Employee", new { barangayE.FirstName, barangayE.LastName, barangayE.Gender, barangayE.Email, barangayE.Address, barangayE.DateJoined }, connectionStringName, true);
        }
        public void DeleteBarangayEmployee(int barangayEmployeeId)
        {
            _db.DeleteData("spDelete_Barangay_Employee", new { barangayEmployeeId }, connectionStringName, true);
        }

    }
}
