﻿CREATE TABLE [dbo].[Admins]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserName] NVARCHAR(30) NOT NULL, 
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL, 
    [Nickname] NVARCHAR(15) NOT NULL, 
    [Email] NVARCHAR(25) NOT NULL, 
    [Password] NVARCHAR(30) NOT NULL
)
