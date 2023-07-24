CREATE PROCEDURE [dbo].[spAdmin_Update]
	@adminId int,
	@userName nvarchar(30),
	@firstName nvarchar(30),
	@lastName nvarchar(25),
	@nickName nvarchar(15),
	@email nvarchar(30),
	@password nvarchar(30)
AS
begin
	set nocount on;

	UPDATE dbo.Admins
	SET 
		UserName = @userName, 
		FirstName = @firstName, 
		LastName = @lastName,
		Nickname = @nickName,
		Email = @email,
		Password = @password
	WHERE Id = @adminId;
end
RETURN 0
