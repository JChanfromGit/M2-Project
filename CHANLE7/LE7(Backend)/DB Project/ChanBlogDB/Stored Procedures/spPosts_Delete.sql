CREATE PROCEDURE [dbo].[spPosts_Delete]
    @postsEmployeeId INT
AS
BEGIN
    DELETE FROM dbo.Posts_Employee
    WHERE [Id] = @postsEmployeeId;
END
RETURN 0