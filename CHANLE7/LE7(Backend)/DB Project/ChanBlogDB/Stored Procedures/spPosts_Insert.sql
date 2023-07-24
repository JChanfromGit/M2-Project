CREATE PROCEDURE [dbo].[spPosts_Insert]
	@adminId int,
	@position nvarchar(50),
	@lastName nvarchar(50),
	@firstName nvarchar(50),
	@currentPay decimal(18, 2),
	@dateJoined datetime2
AS
begin
	INSERT INTO dbo.Posts_Employee
		(AdminId, Position, LastName, FirstName, CurrentPay, DateJoined)
		VALUES (@adminId, @position, @lastName, @firstName, @currentPay, @dateJoined)
end