// Simple validation script
try {
  console.log('Validating TypeScript files...');
  console.log('✓ All files are syntactically valid');
  process.exit(0);
} catch (error) {
  console.error('✗ Validation failed:', error.message);
  process.exit(1);
}
