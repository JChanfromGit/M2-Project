CREATE TABLE [dbo].[Barangay_Employee]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL, 
    [Gender] NVARCHAR(50) NOT NULL,
    [Email] NVARCHAR(50) NOT NULL,
    [Address] NVARCHAR(50) NOT NULL,
    [DateJoined] DATETIME2 NOT NULL
)
