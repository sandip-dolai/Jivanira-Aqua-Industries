'use client';

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { brandColors } from '@/theme/colors';

interface LegalModalProps {
  open: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ open, type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby="legal-dialog-title"
    >
      <DialogTitle
        id="legal-dialog-title"
        sx={{
          m: 0,
          p: 2.5,
          fontWeight: 800,
          color: brandColors.deepNavy,
          borderBottom: `1px solid ${brandColors.borderLight}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, color: brandColors.deepNavy }}>
          {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ color: brandColors.slateMuted }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: { xs: 2.5, md: 4 } }}>
        {isPrivacy ? (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              1. Overview
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              Jivanira Aqua Industries operates this website to provide information regarding its upcoming packaged
              drinking water brand, JIVANIRA, and to receive initial business and commercial enquiries. We respect your
              privacy and are committed to safeguarding the personal information you share with us.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              When you submit a contact or business enquiry form, we collect the details you provide, including your
              name, phone number, email address, company name, and enquiry message. We use this information solely to
              evaluate and respond to prospective partnerships or customer questions.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              3. Data Protection and Use
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              We do not sell, rent, or trade your contact information to third parties. Your details are accessed
              strictly by authorized personnel for legitimate business communication regarding the proposed launch of
              JIVANIRA in 2027.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              4. Pre-Launch Status Notice
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              All information provided on this website represents a proposed pre-establishment stage. Formal commercial
              contracts and transactional systems will only be deployed upon commercial readiness and regulatory
              licensing.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              5. Contact
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8 }}>
              For privacy inquiries, please contact Jivanira Aqua Industries, Dabadari, Paschim Medinipur, West Bengal,
              India.
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              1. Nature of the Website
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              This website is published by Jivanira Aqua Industries, a sole proprietorship founded by Sandip Dolai in
              Dabadari, Paschim Medinipur, West Bengal, India. The enterprise is currently in a proposed,
              pre-establishment stage with commercial operations planned for 2027.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              2. Informational and Prospective Enquiries
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              All content on this website, including proposed bottle formats (500 ml, 1 Litre, etc.), packaging
              specifications, and quality frameworks, is intended solely for general brand awareness and prospective B2B
              enquiry generation. It does not constitute a commercial offer of sale or an indication of immediate
              product availability.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              3. Regulatory Compliance
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              All packaged drinking water production and commercial distribution will strictly adhere to mandatory
              statutory standards, including applicable FSSAI and BIS approvals, prior to commercial distribution.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              4. Intellectual Property
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
              The brand name JIVANIRA, logo concepts, trade dress, tagline ("Pure Refreshment. A Better Tomorrow."), and
              site text are the intellectual property of Jivanira Aqua Industries.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
              5. Jurisdiction
            </Typography>
            <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8 }}>
              Any disputes arising from or in connection with the use of this website shall be subject to the exclusive
              jurisdiction of the courts of Paschim Medinipur, West Bengal, India.
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

