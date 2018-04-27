$(document).ready(function(){
	
	function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    $('#captchaOperation').html([randomNumber(1, 20), '+', randomNumber(1, 30), '='].join(' '));
 
 
    //REGISTER FORM CIS-PORTAL (Omary)
    $('#memberForm').bootstrapValidator({
    	
        fields: {
         firstName: {
                message: 'Jina la Kwanza ni Batili',
                validators: {
                    notEmpty: {
                        message: 'Jaza Jina la Kwanza'
                    },
                    stringLength: {
                        min: 1,
                        max: 35,
                        message: 'Jina la Kwanza Angalu lianze na Herufi Moja '
                    }
                }
            },
            
            lastName: {
                message: 'Jina la Mwisho ni Natili',
                validators: {
                    notEmpty: {
                        message: 'Jaza jina la Mwisho'
                    },
                    stringLength: {
                        min: 1,
                        max: 35,
                        message: 'The First Name must have atleast one characters long'
                    }
                }
            },
            
            phoneNumber: {
                validators: {
                	notEmpty: {
                        message: 'Jaza namba ya simu'
                    }
                }
            },

            gender: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Jinsia'
                    }
                }
            },
            
            dateOfBirth: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Tarehe ya Kuzaliwa'
                    }
                }
            },
            
            placeOfBirth: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Eneo la Kuzaliwa'
                    }
                }
            },
            
            maritalStatus: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Hali ya Ndoa'
                    }
                }
            },
            
            educationLevel: {
                validators: {
                    notEmpty: {
                        message: 'Jaza  Elimu'
                    }
                }
            },
            
            occupationType: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Kazi'
                    }
                }
            },
            
            shina: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Shina'
                    }
                }
            },
            
            registrationDate: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Tarehe ya Kusajiliwa'
                    }
                }
            },
            
           memberSignature: {
                validators: {
		            file: {
		            	extension: 'gif,jpeg,jpg,png,GIF,JPEG,JPG,PNG',
		                type: 'image/png,image/jpeg,image/gif',
		                message: 'Tafadhali pandisha picha.'
		            }
        		 }
          },
          
          IDAttachment: {
              validators: {
		            file: {
		                extension: 'gif,jpeg,jpg,png,GIF,JPEG,JPG,PNG',
		                type: 'image/png,image/jpeg,image/gif',
		                message: 'Tafadhali pandisha picha.'
		            }
      		 }
        },
            
         memberPhoto: {
                validators: {
                	file: {
                		extension: 'gif,jpeg,jpg,png,GIF,JPEG,JPG,PNG',
		                type: 'image/png,image/jpeg,image/gif',
		                message: 'Tafadhali pandisha picha.'
		            }
                }
            },
        }
    });
    
    
    // ASSET REGISTRATION VALIDATION
    $('#assetregForms').bootstrapValidator({

       
        fields: {
         type: {
               
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Aina ya Mali'
                    }
               
                }
            },
            
            
            name: {
                
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Andika Jina la Mali'
                    }
               
                }
            },
            
            
            oldCode: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Nambari ya Mali'
                    }
                }
            },
            
            regionId: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Mkoa'
                    }
                }
            },

            districtId: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Wilaya'
                    }
                }
            },
            
            wardId: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Kata'
                    }
                }
            },
            
            villageId: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Kijiji'
                    }
                }
            },
            
         mgogoro: {
              validators: {
                 notEmpty: {
                    message: 'Tafadhali Chagua Hali ya Mgogoro'
                  }
            }
         },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Sanduku la Posta'
                    }
                }
            },
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            },
            
            hatiType: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Aina ya Hati'
                    }
                }
            },
            

            hatiNumber: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Nambari ya Hati'
                    }
                }
            },
            
            organ: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Taasisi Simamizi'
                    }
                }
            },
            
            developed: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Kama Kimeendelezwa'
                    }
                }
            },
            
            size: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Ukubwa wa Ardhi'
                    }
                }
            },
            
            value: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Thamani ya Ardhi'
                    }
                }
            },
            
            memberCode: {
                validators: {
                    notEmpty: {
                        message: ' Jaza namba ya msimamizi'
                    }
                }
            },
            
          
            acquiredDate: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Tarehe ya Kupatikana'
                    }
                }
            },
            
   
            acqusition: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Kupatikana'
                    }
                }
            },
        }
    });
    
    //TRANSFER VALIDATION
    $('#transForm').bootstrapValidator({
    	fields: {
    		region: {
    			validators: {
    				notEmpty: {
    					message: 'Tahadhari Jaza Mkoa'
    				}
    			}
    		},
    		
    		districts: {
                validators: {
                    notEmpty: {
                        message: 'Tahadhari Jaza Wilaya'
                    }
                }
            },
            
            ward: {
                validators: {
                    notEmpty: {
                        message: 'Tahadhari Jaza Kata'
                    }
                }
            },
            
            tawiDest: {
                validators: {
                    notEmpty: {
                        message: 'Tahadhari Jaza Tawi'
                    }
                }
            },
            
            shinaDest: {
                validators: {
                    notEmpty: {
                        message: 'Tahadhari Jaza Shina '
                    }
                }
            },
    	}
    });
   
    //EXAMPLE MATAWI REGISTER
    $('#tawiForm').bootstrapValidator({
    	fields: {
    		type: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Aina ya Tawi'
                    }
                }
            },
            
            name: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Jina la Tawi'
                    }
                }
            },
            
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza tarehe ya kuanzishwa Tawi'
                    }
                }
            },   
        }
    });
    
    
  //EXAMPLE MASHINA REGISTER
    $('#shinaForm').bootstrapValidator({
    	fields: {
    		region: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali chagua Mkoa husika'
                    }
                }
            },
            
            district: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Chagua Wilaya husika'
                    }
                }
            },
            
            ward: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Kata husika'
                    }
                }
            },
            
            tawi: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Tawi husika'
                    }
                }
            },
            
            name: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Jina la Shina'
                    }
                }
            }
        }
    });
    
    
    //EXAMPLE JUMUIYA REGISTER
    $('#jumuiyaForm').bootstrapValidator({
    	fields: {
    		name: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            
            
            ageFrom: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            
            ageTo: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            }
        }
    });
    
    //EXAMPLE JUMUIYA REGISTER
    $('#settle-bills-tenants').bootstrapValidator({
    	fields: {
    		amountPaid: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Kiasi Alicholipa'
                    }
                }
            },
            
            
            transactionNumber: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Kumbukumbu Namba'
                    }
                }
            },
            
            paymentMethod: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Njia ya Malipo'
                    }
                }
            },
            
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            }
        }
    });
    
  //EXAMPLE JUMUIYA REGISTER
    $('#settle-bill-all').bootstrapValidator({
    	fields: {
    		amountPaid: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Kiasi Alicholipa'
                    }
                }
            },
            
            
            transactionNumber: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Kumbukumbu Namba'
                    }
                }
            },
            
            paymentMethod: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Chagua Njia ya Malipo'
                    }
                }
            },
            
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            }
            
        }
    });
  
    
    //EXAMPLE TAARIFA ZA VIKAO
    $('#vikaoReport').bootstrapValidator({
    	fields: {
    		kikaoChild: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
     
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            },
        }
    });
    
    //EXAMPLE CHAMA REGISTER
    $('#chamaForm').bootstrapValidator({
    
    	fields: {

            banks: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
    		type: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            },
        }
    });
    //EXAMPLE MOBILEMEMBER REGISTER
    $('#mobileMember').bootstrapValidator({
    	fields: {
    		memberShipCode: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
     
            imei: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            }
        }
    });
    
    //EXAMPLE UJEMBE KWA WASIO WANACHAMA.
    $('#wasioWanachama').bootstrapValidator({
    	fields: {
    	      file: {
                  validators: {
                      file: {
                          extension: 'text,xls,csv',
                          type: 'text/plain,application/vnd.ms-excel,text/csv',
                          message: 'Tafadhali Chagua csv file.'
                      }
                  }
              },
            messageBody: {
                validators: {
                    notEmpty: {
                        message: 'TAFADHALI JAZA TAARIFA ZOTE'
                    }
                }
            }
        }
    });
    
    $('#positionForm').bootstrapValidator({
    	fields: {
    		type: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
     
            name: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            }
        }
    });
    //MALI ZINGINE 
    
    $('#buildingForm').bootstrapValidator({
    	fields: {
    		value: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            
            memberCode: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
            jengo: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa za Ardhi'
                    }
                }
            },
            
            chamaOffice: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa '
                    }
                }
            },
            
            administrativeOrgan: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali Jaza Taarifa'
                    }
                }
            },
             mkatabaFile: {
                    validators: {
                        file: {
                            extension: 'pdf,doc,docx',
                            type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            message: 'Tafadhali Chagua pdf au word file.'
                        }
                    }
                },
                
                file: {
                    validators: {
                        file: {
                            extension: 'text,xls,csv',
                            type: 'text/plain,application/vnd.ms-excel,text/csv',
                            message: 'Tafadhali Chagua csv file.'
                        }
                    }
                },
            name: {
                validators: {
                    notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            }
        }
    });    
    
    
  //TENANTS REGISTER VALIDATIONS - BUILDING SEARCH
    $('#serchBuilding').bootstrapValidator({
    	fields: {
    		code: {
                validators: {
                	notEmpty: {
                        message: 'Weka Nambari ya Jengo Kwanza!'
                    }
                }
            }
    	}
    }); 
    
    //sitisha-mkataba
    $('#sitisha-mkataba').bootstrapValidator({
    	fields: {
    		terminationReason: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali weka Sababu'
                    }
                }
            }
    	}
    }); 
    //chumba-edit
    $('#room-edit').bootstrapValidator({
    	fields: {
    		chumbaType: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            size: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            chumbaOldCode: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            }
    	}
    }); 
    
    //lipia bili kwa Mwanachama
    $('#settle-bills').bootstrapValidator({
    	fields: {
    		amountPaid: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            contributionCategory: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            paymentMethod: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            receiptNumber: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            },
            file: {
                validators: {
                    file: {
                        extension: 'pdf,doc,docx',
                        type: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        message: 'Tafadhali Chagua pdf au word file.'
                    }
                }
            },
            transactionReason: {
                validators: {
                	notEmpty: {
                        message: 'Tafadhali jaza Taarifa'
                    }
                }
            }
    	}
    });
    //CALL A MEETING VALIDATIONS 
    $('#itishaKikao').bootstrapValidator({
        fields: {
        	aina: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Aina ya Kikao!'
                    }
                }
            },
            positions_level: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Ngazi ya Kikao!'
                    }
                }
            },
            position: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Ngazi ya Kikao!'
                    }
                }
            },
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'Weka Tarehe ya Kuanza Kikao!'
                    }
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'Weka tarehe ya Kumaliza Kikao!'
                    }
                }
            },
            location: {
                validators: {
                    notEmpty: {
                        message: 'Weka Mahali Kikao Kitafanyika!'
                    }
                }
            },
            messageBody: {
                validators: {
                    notEmpty: {
                        message: 'Weka Ujumbe UInaotaka Kutuma Kwa Wajumbe!'
                    }
                }
            }
        }
    });
   
    
    //TENANTS SEARCH VALIDATIONS 
    $('#tenants').bootstrapValidator({
    	
        fields: {
        	region: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Mkoa!'
                    }
                }
            
        },
    
        jengoCode: {
        validators: {
        	notEmpty: {
                message: 'Chagua Jengo / Mali!'
            }
          }
        }
      }  
    });
    
    
   
    
  //TENANTS REGISTRATION VALIDATIONS
    $('#addTenantForm').bootstrapValidator({
        
    	fields: {
    		tenantType: {
                validators: {
                	notEmpty: {
                        message: 'Chagua aina ya Mpangaji!'
                    }
                }
            },
            phoneNumber: {
                validators: {
                	notEmpty: {
                        message: 'Weka Namba ya Simu ya Mpangaji!'
                    }
                }
            },
            physicalAddress: {
                validators: {
                	notEmpty: {
                        message: 'Weka Anuani ya Makazi!'
                    }
                }
            },
            startDate: {
                validators: {
                	notEmpty: {
                        message: 'Weka Muda wa Kuanza Mkataba!'
                    }
                }
            },
            endDate: {
                validators: {
                	notEmpty: {
                        message: 'Weka Muda wa Kumaliza Mkataba!'
                    }
                }
            },
            mudaMalipo: {
                validators: {
                	notEmpty: {
                        message: 'Weka Muda wa Malipo!'
                    }
                }
            },
            kodiMwezi: {
                validators: {
                	notEmpty: {
                        message: 'Weka Kodi ya mwezi!'
                    }
                }
            },
            matumiziDescription: {
                validators: {
                	notEmpty: {
                        message: 'Weka Maelezo ya Matumizi ya Chumba!'
                    }
                }
            },
            mkataba: {
                validators: {
                	notEmpty: {
                        message: 'Weka Mkataba!'
                    }
                }
            },
            mkataba: {
                validators: {
                    file: {
                        extension: 'pdf',
                        type: 'application/pdf',
                        message: 'Tafadhali Chagua pdf file.'
                    }
                }
            }
    	}
    });

    
  //Validation For Member Education
    $('#educationFormSZ').bootstrapValidator({
    	fields: {
            endYear: {
                validators: {
                    date: {
                        min: 'startYear'
                    }	
                }
            }
        }
    });

   
  //Validation For Member Education
    $('#formVikao').bootstrapValidator({
    	fields: {
    		aina: {
                validators: {
                	notEmpty: {
                        message: 'Chagua Aina ya Kikao/Mkutano'
                    }
                }
            },
            
            level: {
                validators: {
                	notEmpty: {
                        message: 'Chagua Ngazi ya Mkutano'
                    }
                }
            },
            
            name: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Jina la Mkutano/Kikao'
                    }
                }
            },
            
            idadi: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Idadi ya Vikao'
                    }
                }
            },
            
            period: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Muda wa Vikao(Kila Baada Ya)'
                    }
            
                }
            },
            
            jumla: {
                validators: {
                    notEmpty: {
                        message: 'Jaza Mwezi/Mwaka '
                    }
                }
            },
        }
    });
 
    
  //Validation For Member Education
    $('#vikaoMembers').bootstrapValidator({
    	fields: {
    		aina: {
                validators: {
                	notEmpty: {
                        message: 'Chagua Aina ya Kikao/Mkutano'
                    }
                }
            },
            
            positions_level: {
                validators: {
                	notEmpty: {
                        message: 'Chagua Ngazi ya  Kikao/Mkutano'
                    }
                }
            },
            
            position: {
                validators: {
                    notEmpty: {
                        message: 'Chagua Jina la Mkutano/Kikao'
                    }
                }
            },
            
           
        }
    });
 
    
    
    //Validation For Member Education
      $('#uongoziForm').bootstrapValidator({
      	fields: {
      		memberCode: {
                  validators: {
                  	notEmpty: {
                          message: 'Jaza Namba ya Mwanachama'
                      }
                  }
              },
              
              aina: {
                  validators: {
                  	notEmpty: {
                          message: 'Chagua aina ya Uongozi'
                      }
                  }
              },
              
              positions_level: {
                  validators: {
                      notEmpty: {
                          message: 'Chagua Ngazi za Uongozi'
                      }
                  }
              },
              
              position: {
                  validators: {
                      notEmpty: {
                          message: 'Chagua Jina la Cheo'
                      }
                  }
              },
              
              startDate: {
            	  
                  validators: {
                      notEmpty: {
                          message: 'Jaza Tarehe ya Kuanza'
                      }
                  }
              },
              
              
              endDate: {
                  validators: {
                      notEmpty: {
                          message: 'Jaza Tarehe ya Kumaliza'
                      }
                  }
              },  
             
              status: {
                  validators: {
                      notEmpty: {
                          message: 'Jaza Hali ya Uanachama'
                      }
                  }
              },  
          }
      });
     

    //Validation For Change Password
      $('#change-password').bootstrapValidator({
      	fields: {
      		password: {
                  validators: {
                  	notEmpty: {
                          message: 'Jaza Nywila ya Zamani'
                      }
                  }
              },
              
              newPassword: {
                  validators: {
                  	notEmpty: {
                  		
                          message: 'Jaza Nywila Mpya'
                      }
                  }
              },
              
              newPasswordConfirmation: {
                  validators: {
                    notEmpty: {
                          message: 'Rudia Kujaza Nywila Mpya'
                      },
                   identical: {
                          field: 'newPassword',
                          message: 'Nywila uliyorudia haifanani na Nywila Mpya'
                      }  
                      
                  }
              },
              
             
          }
      });
      
      //Validation For user to change default password
      $('#new-password').bootstrapValidator({
      	fields: {
      		password: {
                  validators: {
                  	notEmpty: {
                          message: 'Jaza Nywila ya Zamani'
                      }
                  }
              },
              
              newPassword: {
                  validators: {
                  	notEmpty: {
                          message: 'Jaza Nywila Mpya'
                      }
                                        
                  }
              },
              
              newPasswordConfirmation: {
                  validators: {
                    notEmpty: {
                          message: 'Rudia Kujaza Nywila Mpya'
                      },
                   identical: {
                          field: 'newPassword',
                          message: 'Nywila uliyorudia haifanani na Nywila Mpya'
                      }  
                      
                  }
              },
              
             
          }
      });
      
      
      
    //Validation For Change Password
      $('#reset-password').bootstrapValidator({
      	fields: {
      		membershipCode: {
                  validators: {
                  	notEmpty: {
                          message: 'Jaza namba ya Mwanachama'
                      }
                  }
              },
              
                           
             
          }
      });
       
     
      
});






