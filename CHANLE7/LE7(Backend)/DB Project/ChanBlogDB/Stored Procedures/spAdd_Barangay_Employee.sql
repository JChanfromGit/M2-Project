CREATE PROCEDURE [dbo].[spAdd_Barangay_Employee]
	@firstName nvarchar(50),
	@lastName nvarchar(50),
	@gender nvarchar(50),
	@email nvarchar(50),
	@address nvarchar(50),
	@dateJoined datetime2
AS
begin
	INSERT INTO dbo.Barangay_Employee
		(FirstName, LastName, Gender, Email, Address, DateJoined)
		VALUES (@firstName, @lastName, @gender, @email, @address, @dateJoined)
end