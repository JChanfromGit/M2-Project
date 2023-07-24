CREATE PROCEDURE [dbo].[spUpdate_Barangay_Employee]
	@adminId INT,
	@firstName nvarchar(50),
	@lastName nvarchar(50),
	@gender nvarchar(50),
	@email nvarchar(50),
	@address nvarchar(50),
	@dateJoined datetime2
AS
BEGIN
	UPDATE dbo.Barangay_Employee
	SET FirstName = @firstName,
		LastName = @lastName,
		Gender = @gender,
		Email = @email,
		Address = @address,
		DateJoined = @dateJoined
	WHERE Id = @adminId;
END
