CREATE PROCEDURE [dbo].[spPosts_Update]
    @adminId INT,
    @position NVARCHAR(50),
    @lastName NVARCHAR(50),
    @firstName NVARCHAR(50),
    @currentPay DECIMAL(18, 2),
    @dateJoined DATETIME2
AS
BEGIN
    UPDATE dbo.Posts_Employee
    SET
        AdminId = @adminId,
        Position = @position,
        LastName = @lastName,
        FirstName = @firstName,
        CurrentPay = @currentPay,
        DateJoined = @dateJoined
    WHERE
        Id = @adminId;
END