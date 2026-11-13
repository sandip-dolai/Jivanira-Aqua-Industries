import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SectionHeader from '@/components/common/SectionHeader';
import { brandColors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Privacy Policy | JIVANIRA Aqua Industries',
  description: 'Privacy Policy for Jivanira Aqua Industries website visitors and enquiry submissions.',
};

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeader
          overline="Legal & Privacy"
          title="Privacy Policy"
          subtitle="How Jivanira Aqua Industries handles website visitor and prospective business enquiry information."
        />

        <Card sx={{ p: { xs: 3.5, md: 5 }, borderRadius: 3, border: `1px solid ${brandColors.borderLight}` }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            1. Overview
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            Jivanira Aqua Industries operates this website to provide information regarding its upcoming packaged
            drinking water brand, JIVANIRA, and to receive initial business and commercial enquiries. We respect your
            privacy and are committed to safeguarding the personal information you share with us.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            2. Information We Collect
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            When you submit a contact or business enquiry form, we collect the details you provide, including your name,
            phone number, email address, company name, and enquiry message. We use this information solely to evaluate
            and respond to prospective partnerships or customer questions.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            3. Data Protection and Use
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            We do not sell, rent, or trade your contact information to third parties. Your details are accessed strictly
            by authorized personnel for legitimate business communication regarding the proposed launch of JIVANIRA in
            2027.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            4. Pre-Launch Status Notice
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            All information provided on this website represents a proposed pre-establishment stage. Formal commercial
            contracts and transactional systems will only be deployed upon commercial readiness and regulatory licensing.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            5. Contact
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8 }}>
            For privacy inquiries, please contact Jivanira Aqua Industries, Dabadari, Paschim Medinipur, West Bengal,
            India.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
