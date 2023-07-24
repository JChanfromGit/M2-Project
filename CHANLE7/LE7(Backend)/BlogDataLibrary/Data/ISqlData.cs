using BlogDataLibrary.Models;

namespace BlogDataLibrary.Data
{
    public interface ISqlData
    {
        void AddEmployee(BarangayEmployee barangayE);
        void AddPost(PostEmployee post);
        AdminModel Authenticate(string username, string password);
        void DeleteBarangayEmployee(int barangayEmployeeId);
        void DeletePost(int postId);
        List<ListPostModel> ListPosts();
        void Register(string userName, string firstName, string lastName, string nickName, string email, string password);
        ListPostModel ShowPostsDetails(int id);
        void UpdateBarangayEmployee(BarangayEmployee barangayE);
        void UpdatePost(PostEmployee post);
    }
}