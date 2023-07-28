using BlogDataLibrary.Data;
using BlogDataLibrary.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System.Security.Claims;

namespace BlogAPI.Controllers
{
    public class PostController : Controller
    {
        private ISqlData _db;

        public PostController(ISqlData db)
        {
            _db = db;
        }


        [AllowAnonymous]
        [HttpGet]
        [Route("/api/[controller]/ListPosts")]
        public ActionResult ListPosts()
        {
            List<ListPostModel> posts = _db.ListPosts();

            return Ok(posts);
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public ActionResult ShowPostDetails(int id)
        {
            ListPostModel post = _db.ShowPostsDetails(id);

            return Ok(post);
        }


        private int GetCurrentAdminId()
        {
            ClaimsIdentity identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;
                string id = userClaims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;

                if (id != null)
                {
                    return Convert.ToInt32(id);
                }

            }

            return 0;
        }


        [Authorize]
        [HttpPost]
        [Route("/api/[controller]/addemployee")]
        public ActionResult AddPost([FromBody] PostEmployee post)
        {
            PostEmployee addpost = new PostEmployee();
            addpost.Position = post.Position;
            addpost.LastName = post.LastName;
            addpost.FirstName = post.FirstName;
            addpost.CurrentPay = post.CurrentPay;
            addpost.DateJoined = post.DateJoined;
            addpost.AdminId = GetCurrentAdminId();
            _db.AddPost(addpost);

            return Ok("Post created.");
        }

        [Authorize]
        [HttpDelete]
        [Route("/api/[controller]/deleteemployee/{postId}")]
        public ActionResult DeletePost(int postId)
        {
            _db.DeletePost(postId);
            return Ok("Employee deleted.");
        }

        [Authorize]
        [HttpPut]
        [Route("/api/[controller]/updateemployee/{postId}")]
        public ActionResult UpdatePost(int postId, [FromBody] PostEmployee post)
        {

            _db.UpdatePost(postId, post);

            return Ok();
        }
    }
}