import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import SectionHeader from '@/components/common/SectionHeader';
import { brandColors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Terms and Conditions | JIVANIRA Aqua Industries',
  description: 'Terms and Conditions for accessing and using the Jivanira Aqua Industries website.',
};

export default function TermsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeader
          overline="Terms of Use"
          title="Terms and Conditions"
          subtitle="Please read these terms and conditions carefully before utilizing this website."
        />

        <Card sx={{ p: { xs: 3.5, md: 5 }, borderRadius: 3, border: `1px solid ${brandColors.borderLight}` }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            1. Nature of the Website
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            This website is published by Jivanira Aqua Industries, a sole proprietorship founded by Sandip Dolai in
            Dabadari, Paschim Medinipur, West Bengal, India. The enterprise is currently in a proposed, pre-establishment
            stage with commercial operations planned for 2027.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            2. Informational and Prospective Enquiries
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            All content on this website, including proposed bottle formats (500 ml, 1 Litre, etc.), packaging
            specifications, and quality frameworks, is intended solely for general brand awareness and prospective B2B
            enquiry generation. It does not constitute a commercial offer of sale or an indication of immediate product
            availability.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            3. Regulatory Compliance
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            All packaged drinking water production and commercial distribution will strictly adhere to mandatory
            statutory standards, including applicable FSSAI and BIS approvals, prior to commercial distribution.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            4. Intellectual Property
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
            The brand name JIVANIRA, logo concepts, trade dress, tagline ("Pure Refreshment. A Better Tomorrow."), and
            site text are the intellectual property of Jivanira Aqua Industries.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1 }}>
            5. Jurisdiction
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.8 }}>
            Any disputes arising from or in connection with the use of this website shall be subject to the exclusive
            jurisdiction of the courts of Paschim Medinipur, West Bengal, India.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
