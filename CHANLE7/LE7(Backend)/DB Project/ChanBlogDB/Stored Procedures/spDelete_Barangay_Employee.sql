CREATE PROCEDURE [dbo].[spDelete_Barangay_Employee]
	@barangayEmployeeId int
AS
begin
	DELETE FROM dbo.Barangay_Employee
	WHERE [Id] = @barangayEmployeeId
end
RETURN 0
