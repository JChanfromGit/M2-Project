CREATE PROCEDURE [dbo].[spAdmins_Authenticate]
	@username nvarchar(30),
	@password nvarchar(30)
AS
begin

	set nocount on;
	SELECT [Id], [UserName], [FirstName], [LastName], [Nickname], [Email], [Password]
	FROM dbo.Admins
	WHERE UserName = @username
	AND Password = @password;

end

RETURN 0