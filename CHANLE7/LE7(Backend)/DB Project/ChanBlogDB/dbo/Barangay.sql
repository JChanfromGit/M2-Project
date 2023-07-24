CREATE TABLE [dbo].[Barangay]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [BarangayName] NVARCHAR(50) NOT NULL,
    [City] NVARCHAR(50) NULL,
    [Zip] INT NOT NULL, 
    [District] NVARCHAR(50) NOT NULL,
    [Province] NVARCHAR(50) NOT NULL
)
