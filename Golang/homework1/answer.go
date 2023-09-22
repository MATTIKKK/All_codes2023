package main

import (
	"fmt"
)


type Employee interface {
	GetPosition() string
	SetPosition(string)
	GetSalary() float64
	SetSalary(float64)
	GetAddress() string
	SetAddress(string)
}


type Manager struct {
	position string
	salary   float64
	address  string
}

func (m *Manager) GetPosition() string {
	return m.position
}

func (m *Manager) SetPosition(pos string) {
	m.position = pos
}

func (m *Manager) GetSalary() float64 {
	return m.salary
}

func (m *Manager) SetSalary(salary float64) {
	m.salary = salary
}

func (m *Manager) GetAddress() string {
	return m.address
}

func (m *Manager) SetAddress(addr string) {
	m.address = addr
}


type Engineer struct {
	position string
	salary   float64
	address  string
}

func (e *Engineer) GetPosition() string {
	return e.position
}

func (e *Engineer) SetPosition(pos string) {
	e.position = pos
}

func (e *Engineer) GetSalary() float64 {
	return e.salary
}

func (e *Engineer) SetSalary(salary float64) {
	e.salary = salary
}

func (e *Engineer) GetAddress() string {
	return e.address
}

func (e *Engineer) SetAddress(addr string) {
	e.address = addr
}


type Salesperson struct {
	position string
	salary   float64
	address  string
}

func (s *Salesperson) GetPosition() string {
	return s.position
}

func (s *Salesperson) SetPosition(pos string) {
	s.position = pos
}

func (s *Salesperson) GetSalary() float64 {
	return s.salary
}

func (s *Salesperson) SetSalary(salary float64) {
	s.salary = salary
}

func (s *Salesperson) GetAddress() string {
	return s.address
}

func (s *Salesperson) SetAddress(addr string) {
	s.address = addr
}


type Designer struct {
	position string
	salary   float64
	address  string
}

func (d *Designer) GetPosition() string {
	return d.position
}

func (d *Designer) SetPosition(pos string) {
	d.position = pos
}

func (d *Designer) GetSalary() float64 {
	return d.salary
}

func (d *Designer) SetSalary(salary float64) {
	d.salary = salary
}

func (d *Designer) GetAddress() string {
	return d.address
}

func (d *Designer) SetAddress(addr string) {
	d.address = addr
}

type Developer struct {
	position string
	salary   float64
	address  string
}

func (d *Developer) GetPosition() string {
	return d.position
}

func (d *Developer) SetPosition(pos string) {
	d.position = pos
}

func (d *Developer) GetSalary() float64 {
	return d.salary
}

func (d *Developer) SetSalary(salary float64) {
	d.salary = salary
}

func (d *Developer) GetAddress() string {
	return d.address
}

func (d *Developer) SetAddress(addr string) {
	d.address = addr
}

func main() {

	manager := &Manager{}
	manager.SetPosition("Manager")
	manager.SetSalary(60000)
	manager.SetAddress("123 Main St")

	engineer := &Engineer{}
	engineer.SetPosition("Engineer")
	engineer.SetSalary(80000)
	engineer.SetAddress("456 Elm St")

	fmt.Println("Manager:", manager.GetPosition(), manager.GetSalary(), manager.GetAddress())
	fmt.Println("Engineer:", engineer.GetPosition(), engineer.GetSalary(), engineer.GetAddress())
}
