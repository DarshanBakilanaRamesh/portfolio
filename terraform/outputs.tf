output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.portfolio.id
}

output "public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.portfolio.public_ip
}

output "security_group_id" {
  description = "ID of the security group attached to the EC2 instance"
  value       = aws_security_group.portfolio_web.id
}
