variable "aws_region" {
  description = "AWS region where the infrastructure will be created"
  type        = string
  default     = "eu-central-1"
}

variable "project_name" {
  description = "Project tag applied to Terraform-managed resources"
  type        = string
  default     = "portfolio"
}

variable "environment" {
  description = "Environment tag applied to Terraform-managed resources"
  type        = string
  default     = "dev"
}

variable "instance_name" {
  description = "Name tag for the EC2 instance"
  type        = string
  default     = "portfolio-ec2"
}

variable "security_group_name" {
  description = "Name for the EC2 security group"
  type        = string
  default     = "portfolio-web-sg"
}

variable "instance_type" {
  description = "EC2 instance type for the portfolio host"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  type        = string
}

variable "key_pair_name" {
  description = "Existing AWS EC2 key pair name used for SSH access"
  type        = string
}

variable "ssh_allowed_cidrs" {
  description = "CIDR blocks allowed to SSH into the instance"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "http_allowed_cidrs" {
  description = "CIDR blocks allowed to access HTTP on the instance"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}
