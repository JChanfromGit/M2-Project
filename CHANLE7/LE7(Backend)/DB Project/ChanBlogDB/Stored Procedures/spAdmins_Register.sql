CREATE PROCEDURE [dbo].[spAdmins_Register]
	@userName nvarchar(30),
	@firstName nvarchar(50),
	@lastName nvarchar(50),
	@nickName nvarchar(15),
	@email nvarchar(25),
	@password nvarchar(30)
AS
begin
	set nocount on;

	INSERT INTO dbo.Admins
		(UserName, FirstName, LastName, Nickname, Email, Password)
		VALUES (@userName, @firstName, @lastName, @nickName, @email, @password)
end