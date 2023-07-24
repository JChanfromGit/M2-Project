CREATE PROCEDURE [dbo].[spPosts_Detail]
	@id int
AS
begin
	SELECT [p].[Id], [p].[Position], [p].[CurrentPay], [p].[LastName], [p].[FirstName], [p].[DateJoined]
	FROM dbo.Posts_Employee p
	WHERE p.Id = @id;
end

RETURN 0