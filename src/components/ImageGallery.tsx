import { useState } from 'react'
import { Box, Grid, Modal, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: {
    url: string
    title?: string
    description?: string
  }[]
  columns?: number
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={12 / columns} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{ cursor: 'pointer' }}
              onClick={() => handleImageClick(index)}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '75%',
                  overflow: 'hidden',
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={image.url}
                  alt={image.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <AnimatePresence>
        {selectedImage !== null && (
          <Modal
            open={true}
            onClose={handleClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 0, 0, 0.8)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: -40,
                  top: -40,
                  color: 'white',
                  zIndex: 1,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                component="img"
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                }}
              />
              {(images[selectedImage].title || images[selectedImage].description) && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    p: 2,
                  }}
                >
                  {images[selectedImage].title && (
                    <Box component="h3" sx={{ m: 0, mb: 1 }}>
                      {images[selectedImage].title}
                    </Box>
                  )}
                  {images[selectedImage].description && (
                    <Box component="p" sx={{ m: 0 }}>
                      {images[selectedImage].description}
                    </Box>
                  )}
                </Box>
              )}
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageGallery 