'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { brandColors } from '@/theme/colors';

const ENQUIRY_CATEGORIES = [
  'General Enquiry',
  'Distribution Partnership',
  'Retail Partnership',
  'Wholesale Enquiry',
  'Institutional Supply',
  'Other Business Enquiry',
];

interface EnquiryFormProps {
  initialCategory?: string;
}

export default function EnquiryForm({ initialCategory = 'General Enquiry' }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    enquiryType: ENQUIRY_CATEGORIES.includes(initialCategory) ? initialCategory : 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a brief message or requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate network processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          backgroundColor: '#FFFFFF',
          borderRadius: 3,
          boxShadow: '0 8px 30px rgba(13, 117, 183, 0.08)',
          border: `1px solid ${brandColors.borderLight}`,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: brandColors.lightBlue,
            color: brandColors.primaryBlue,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2.5,
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 38 }} />
        </Box>
        <AlertTitle sx={{ fontSize: '1.4rem', fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
          Enquiry Received with Thanks!
        </AlertTitle>
        <Alert severity="info" sx={{ mb: 3, textAlign: 'left', backgroundColor: brandColors.lightBlue }}>
          Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding{' '}
          <strong>{formData.enquiryType}</strong> has been logged into our pre-establishment prospective register.
          Official business phone, email, and distribution channels will be formally communicated ahead of our planned
          2027 commercial launch.
        </Alert>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              companyName: '',
              enquiryType: 'General Enquiry',
              message: '',
            });
          }}
        >
          Submit Another Enquiry
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        p: { xs: 3, sm: 4, md: 5 },
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(13, 117, 183, 0.07)',
        border: `1px solid ${brandColors.borderLight}`,
      }}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            placeholder="e.g. Ramesh Ghosh"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            placeholder="+91 98765 43210"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            placeholder="ramesh@example.com"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company / Enterprise Name (Optional)"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Ghosh Enterprises"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            required
            fullWidth
            label="Enquiry Category"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
          >
            {ENQUIRY_CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Message / Requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
            placeholder="Please detail your interest in distribution, retail supply, institutional requirements, or general queries..."
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            sx={{ py: 1.4, fontSize: '1rem', fontWeight: 700 }}
          >
            {isSubmitting ? 'Submitting Enquiry...' : 'Submit Business Enquiry'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
