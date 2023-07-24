CREATE PROCEDURE [dbo].[spPosts_List]
AS
BEGIN
	set nocount on;

	SELECT [p].[Id], [p].[AdminId], [p].[Position], [p].[CurrentPay], [p].[LastName], [p].[FirstName], [p].[DateJoined]
	FROM dbo.Posts_Employee p
END
RETURN 0