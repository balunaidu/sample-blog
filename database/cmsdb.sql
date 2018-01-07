-- phpMyAdmin SQL Dump
-- version 4.6.6deb1+deb.cihar.com~xenial.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 21, 2017 at 07:11 PM
-- Server version: 5.7.18-0ubuntu0.16.04.1
-- PHP Version: 7.0.18-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cmsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `pagetable`
--

CREATE TABLE `pagetable` (
  `ID` int(11) NOT NULL,
  `pagename` varchar(100) NOT NULL,
  `pagecontent` varchar(1000) NOT NULL,
  `pagedescription` varchar(300) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pagetable`
--

INSERT INTO `pagetable` (`ID`, `pagename`, `pagecontent`, `pagedescription`, `status`, `createdAT`, `modifiedAT`) VALUES
(1, 'Page2', 'uigviufdinigjfgkfghgh\nghdjghjjkfdlkgjoerotret\nkgfjkhf;lkjhfoi\nfghfghfghnnfghgh', 'iuininidfgdhdyfgfhfhfghfgh\nfhf\nghfg\nhf\nh\nfgh\nf\nh', 10, '2017-07-20 10:36:05', '2017-07-20 10:36:05'),
(2, 'Page2', 'uigviufdinghjghjjhkfdgnbjksngjkf\ngsfgjbkjbjxkfgkhfgkjnbjgkfjngf\nfjgnbkjfngknfgnfkjgnjfngkjgfh\ngjkfnkjfgnjkfngkjhfng\nfgjknkfjgnklfngkjkhnkjn', 'iuininidfgdhdy', 10, '2017-07-20 10:37:05', '2017-07-20 10:37:05'),
(3, 'Page3', 'jhfghdjkfjkdzlghjkhjkfhdg\nhfgkjhkjkfgjhkjkfgjhkjfgkhfg\nhkfhgkjhklfgjhkljfhkljfg;klhjlkfgh\nfglkhjkxfgjhkjgfhkljfglkhjlkfgjh;kljfghk', 'hjjgjhkxfghgf', 10, '2017-07-20 10:42:34', '2017-07-20 10:42:34'),
(4, 'Page3', 'Word press', 'Explaination', 10, '2017-07-20 11:52:16', '2017-07-20 11:52:16'),
(5, 'Page5', 'hgfghfhgf', 'ghhghhvghvg', 10, '2017-07-20 13:30:32', '2017-07-20 13:30:32'),
(25, 'jkdsghjkdfghjk', 'jkhxfkjghdjkkfdglkjhhhhhh', 'jkhfduiretrtbnrgjbcv bubb fg', 10, '2017-07-21 08:21:07', '2017-07-21 08:21:07'),
(26, 'About Page', 'It is used for some of the contactskjfghkjfdhgkjkjfgkfh', 'its deescription is an sgdkhdgfdghfh', 10, '2017-07-21 08:43:07', '2017-07-21 08:43:07'),
(27, 'Page27', 'used for many contents', 'sidjgfgbugijijidfhhhhhhhhhhhhhhhhfj', 10, '2017-07-21 09:49:04', '2017-07-21 09:49:04');

-- --------------------------------------------------------

--
-- Table structure for table `regtable`
--

CREATE TABLE `regtable` (
  `ID` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `regtable`
--

INSERT INTO `regtable` (`ID`, `firstname`, `lastname`, `username`, `password`, `email`, `status`, `createdAT`, `modifiedAT`) VALUES
(2, 'balu', 'vemula', 'balu', 'balu', 'balu.subramani@clientdigital.net', 10, '2017-07-07 13:32:15', '2017-07-07 13:32:15'),
(3, 'babu', 'vemula', 'babu', 'babu', 'babu@gmail.com', 10, '2017-07-08 10:16:51', '2017-07-08 10:16:51'),
(4, 'dinesh', 'vemula', 'dinesh', 'dinesh', 'dinesh@gmail.com', 10, '2017-07-08 10:17:19', '2017-07-08 10:17:19'),
(5, 'yuvaraj', 'vemula', 'yuva', 'yuva', 'yuva@gmail.com', 10, '2017-07-08 10:18:13', '2017-07-08 10:18:13'),
(9, 'prasad', 'vemula', 'prasad', 'prasad', 'prasad@gmail.com', 10, '2017-07-14 08:45:07', '2017-07-14 08:45:07'),
(10, 'hari', 'vemula', 'hari', 'hari', 'hari.shankar@clientdigital.net', 10, '2017-07-14 11:45:39', '2017-07-14 11:45:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pagetable`
--
ALTER TABLE `pagetable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `regtable`
--
ALTER TABLE `regtable`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pagetable`
--
ALTER TABLE `pagetable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `regtable`
--
ALTER TABLE `regtable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
