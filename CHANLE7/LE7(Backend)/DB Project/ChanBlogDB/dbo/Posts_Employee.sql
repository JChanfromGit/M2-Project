CREATE TABLE [dbo].[Posts_Employee]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [AdminId] INT NOT NULL, 
    [Position] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [FirstName] NVARCHAR(50) NOT NULL,
    [CurrentPay] DECIMAL(18, 2) NOT NULL,
    [DateJoined] DATETIME2 NOT NULL, 
    CONSTRAINT [FK_Posts_Employee_Admins] FOREIGN KEY (AdminId) REFERENCES Admins(Id) 
)
