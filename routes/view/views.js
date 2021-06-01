const express = require('express');
const router = require('express').Router();
const path = require('path')

router.use(express.static(path.join(__dirname, '../../build')));

router.get('/*', function (req, res) {
  router.use(express.static(path.join(__dirname, '../../build')));
  res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

router.get('/admin/*', function (req, res) {
  router.use(express.static(path.join(__dirname, '../../build')));
  res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

module.exports = router;